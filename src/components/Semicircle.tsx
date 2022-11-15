type Props = {
	size: string;
};

function Semicircle(props: Props) {
	return (
		<div
			className={`w-[${props.size}] h-[${props.size}] rounded-bl-full rounded-br-full bg-theme-dark`}
		/>
	);
}

export default Semicircle;
