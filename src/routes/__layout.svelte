<script>
	import '../app.css';
	import {
		Sidebar,
		SidebarWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarDropdownWrapper,
		SidebarDropdownItem,
		DarkMode
	} from 'flowbite-svelte';

	import {
		ChartPie,
		ViewGrid,
		InboxIn,
		User,
		Login,
		Cog,
		ShoppingBag,
		ShoppingCart,
		Table,
		Key
	} from 'svelte-heros';

	import { Side, Nav, Responsive } from 'svelte-sidebar-menu';

	import { quartInOut } from 'svelte/easing';

	// Darkmode component
	let btnClass =
		'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 fixed right-2 top-24 z-50';

	// Side component
	let siteName = 'Svelte-Sidebar';

	let siteClass = 'w-1/4 h-12 text-lg pt-3 pl-12';

	let headerClass =
		'bg-white px-10 items-center text-gray-600 border-b-2 p-4 dark:bg-gray-900 dark:text-white';

	let hamburgerClass =
		'hover:text-gray-500 cursor-pointer mr-4 border-none focus:outline-none pt-2 lg:hidden';

	let topDiv = 'w-full md:block md:w-auto absolute top-16 md:top-1 px-8';

	let topMenuDiv = 'container flex flex-wrap justify-end mx-auto pt-0 md:pt-2';

	let topul =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium pt-1 bg-white dark:bg-gray-900 dark:text-white';

	let childLi =
		'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-lg dark:text-white';

	let asideClass =
		'absolute w-auto border-r-2 shadow-lg z-50 bg-white h-screen overflow-scroll dark:bg-gray-900 dark:text-white';

	let spanClass =
		'pl-2 self-center text-lg font-semibold text-gray-900 whitespace-nowrap dark:text-white';

	// Nav component
	let navClass = 'py-8 px-4 text-lg';

	let navDivClass = 'pb-8';

	let transitionParams = {
		duration: 500,
		delay: 100,
		easing: quartInOut,
		x: -200
	};

	const topMenuList = [
		{ href: '/test1', name: 'Test 1' },
		{ href: '/test2', name: 'Test 2' },
		{ href: '/about', name: 'About' }
	];
</script>

<DarkMode {btnClass} />
<Responsive />
<Side
	{siteName}
	{siteClass}
	{headerClass}
	{hamburgerClass}
	{topDiv}
	{topMenuDiv}
	{topul}
	{childLi}
	{asideClass}
	{spanClass}
	{transitionParams}
	topMenus={topMenuList}
>
	<Nav {navClass} {navDivClass}>
		<Sidebar>
			<SidebarWrapper>
				<SidebarGroup>
					<SidebarItem
						label="Dashboard"
						icon={{ name: ChartPie, class: 'text-red-500 mr-2 dark:text-blue-500' }}
					/>
					<SidebarDropdownWrapper
						label="E-commerce"
						icon={{ name: ShoppingCart, class: 'text-blue-500 mr-2 dark:text-pink-500' }}
					>
						<SidebarDropdownItem label="Products" />
						<SidebarDropdownItem label="Billing" />
						<SidebarDropdownItem label="Invoice" />
					</SidebarDropdownWrapper>
					<SidebarItem
						label="Kanban"
						{spanClass}
						icon={{ name: ViewGrid, class: 'text-green-500 mr-2 dark:text-purple-500' }}
					>
						<svelte:fragment slot="subtext">
							<span
								class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
								>Pro</span
							>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem
						label="Inbox"
						{spanClass}
						icon={{ name: InboxIn, class: 'text-yellow-500 mr-2 dark:text-green-500' }}
					>
						<svelte:fragment slot="subtext">
							<span
								class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
								>3</span
							>
						</svelte:fragment>
					</SidebarItem>
					<SidebarItem
						label="Users"
						icon={{ name: User, class: 'text-blue-500 mr-2 dark:text-pink-500' }}
					/>
					<SidebarItem
						label="Sign In"
						icon={{ name: Login, class: 'text-green-500 mr-2 dark:text-yellow-500' }}
					/>
					<SidebarItem
						label="Sign Up"
						icon={{ name: Cog, class: 'text-pink-500 mr-2 dark:text-blue-500' }}
					/>
				</SidebarGroup>
			</SidebarWrapper>
		</Sidebar>
	</Nav>
</Side>
<main class="container mx-auto py-32 px-8 lg:pl-80 pr-8 dark:text-white ">
	<slot />
</main>

<svelte:head>
	<title>Flowbite-Svelte-Starter</title>
	<meta
		name="description"
		content="Flowbite-Svelte-Starter is a quick way to start Svelte and Flowbite/Tailwind CSS. It comes with SvelteKit, Tailwind CSS, Flowbite,
		Flowbite-Svelte, ESlint, Typescript, Playwright, Prettier, Svelte-heros (Heroicons), Dark mode activated."
	/>
</svelte:head>
