const PrevIcon = ({ size }) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<polyline stroke="currentColor" points="16 4 7 12 16 20" fill="none" />
		</svg>
	)
}

const MenuIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z">
            </path>
        </svg>
    )
}

const NextIcon = ({ size }) => {
	return (
		<svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
			<polyline stroke="currentColor" points="8 4 17 12 8 20" fill="none" />
		</svg>
	)
}

const Icon = ({ name, size = 24 }) => {

	const icons = {
		prev: PrevIcon,
		next: NextIcon,
        menu: MenuIcon
	}

	const Component = icons[name]
	return <Component size={size} />

}

export {
	Icon
}