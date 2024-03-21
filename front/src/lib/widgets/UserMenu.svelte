<script>
	import { Avatar, Dropdown, DropdownDivider, DropdownHeader, DropdownItem } from 'flowbite-svelte';

	export let id = 0; // 1,
	export let name = ''; // "Neil Sims",
	export let avatar = ''; // "neil-sims.png",
	export let email = ''; // "neil.sims@flowbite.com",
	export let biography = ''; // "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
	export let position = ''; // "Front-end developer",
	export let country = ''; // "United States",
	export let status = ''; // "Active"
    export let imagesPath;
</script>

<button class="ms-3 rounded-full ring-gray-400 focus:ring-4 dark:ring-gray-600">
	<Avatar size="sm" src={imagesPath(avatar, 'users')} tabindex="0" />
</button>
<Dropdown placement="bottom-end">
	<DropdownHeader>
		<span class="block text-sm">{name}</span>
		<span class="block truncate text-sm font-medium">{email}</span>
	</DropdownHeader>
	<DropdownItem>Dashboard</DropdownItem>
	<DropdownItem>Settings</DropdownItem>
	<DropdownItem>Earnings</DropdownItem>
	<DropdownDivider />
	<DropdownItem>Sign out</DropdownItem>
</Dropdown>
