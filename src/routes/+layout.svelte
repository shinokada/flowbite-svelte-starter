<script>
	import '../app.css';
	import { DarkMode, Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte';
	let darkmodebtn =
		'text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-32 z-50';
	let navClass = 'bg-ricecake border-gray-200 p-8 border-b rounded  dark:bg-blackpearl';
</script>

<DarkMode btnClass={darkmodebtn} />
<Navbar let:hidden let:toggle {navClass}>
	<NavBrand href="/">
		<img
			src="https://via.placeholder.com/35.png/09f/fff"
			class="mr-3 h-6 sm:h-9"
			alt="Jaco Theme"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Flowbite-Svelte-Starter
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={true} class="text-lg">Home</NavLi>
		<NavLi href="/pages/about" class="text-lg">About</NavLi>
		<NavLi href="/pages/services" class="text-lg">Services</NavLi>
		<NavLi href="/pages/projects" class="text-lg">Projects</NavLi>
	</NavUl>
</Navbar>
<main class="container mx-auto p-16 h-screen">
	<slot />
</main>
