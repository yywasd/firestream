package logic

import (
	"bytes"
	"context"
	"encoding/json"
	"io"
	"net/http"

	"test/internal/svc"
	"test/internal/types"

	"github.com/zeromicro/go-zero/core/logx"
)

var (
	// auth logic
	AuthApi = "http://127.0.0.1:8090/api/collections/users/auth-with-password"
)

// username test  password 147369258

type Record struct {
	Id             string `json:"id"`
	CollectionId   string `json:"collectionId"`
	CollectionName string `json:"collectionName"`
	Created        string `json:"created"`
	Updated        string `json:"updated"`
	Username       string `json:"username"`
	Email          string `json:"email"`
	Verified       string `json:"verified"`
	EmailVerified  string `json:"emailVerified"`
}

type AuthRequest struct {
	Identity string `json:"identity"`
	Password string `json:"password"`
}

type AuthReponse struct {
	Token  string `json:"token"`
	Record Record `json:"record"`
}

type AuthLogic struct {
	logx.Logger
	ctx    context.Context
	svcCtx *svc.ServiceContext
}

func NewAuthLogic(ctx context.Context, svcCtx *svc.ServiceContext) *AuthLogic {
	return &AuthLogic{
		Logger: logx.WithContext(ctx),
		ctx:    ctx,
		svcCtx: svcCtx,
	}
}

func (l *AuthLogic) Auth(req *types.AuthRequset) (resp *types.AuthResponse, err error) {
	ar := AuthRequest{
		Identity: req.Username,
		Password: req.Password,
	}

	bj, err := json.Marshal(ar)
	if err != nil {
		return
	}

	data, err := Post(AuthApi, bj)
	respb := new(AuthReponse)
	err = json.Unmarshal(data, respb)
	if err != nil {
		return
	}
	resp = &types.AuthResponse{
		Token: respb.Token,
	}

	return resp, nil
}

func Post(url string, data []byte) ([]byte, error) {
	request, err := http.NewRequest("POST", AuthApi, bytes.NewReader(data))
	if err != nil {
		return nil, err
	}
	request.Header.Set("Content-Type", "application/json; charset=UTF-8")
	client := &http.Client{}
	response, err := client.Do(request)
	if err != nil {
		return nil, err
	}
	defer response.Body.Close()
	body, err := io.ReadAll(response.Body)
	if err != nil {
		return nil, err
	}
	return body, nil
}
