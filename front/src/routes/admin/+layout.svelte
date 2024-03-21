<script>
    /** @type {import('./$types').LayoutData} */
    import '../../app.pcss';
	import Footer from '$lib/layouts/Footer.svelte';
	import NavBar from '$lib/layouts/NavBar.svelte';
	let drawerHidden = false;

    import SideBar from '$lib/layouts/SideBar.svelte';
    export let data;
</script>

<header
	class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-800"
>
	<NavBar bind:drawerHidden Users={data.users} imagesPath={ data.imagesPath } />
</header>
<div class="overflow-hidden lg:flex">
	<SideBar bind:drawerHidden posts={data.posts} links={ data.links }/>
	<div class="relative h-full w-full overflow-y-auto lg:ml-64">
		<slot />
		<Footer links={data.footerlinks} brands={ data.brands } />
	</div>
</div>