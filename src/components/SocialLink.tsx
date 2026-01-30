export default function SozialLink({ children }: { children: React.ReactNode }) {

	return (
		<a 
			className="
			border border-primary-blue-500 rounded-full                 
			h-8 aspect-square flex justify-center items-center
			text-primary-blue-500 
			hover:bg-primary-blue-500 hover:text-white"
			href="https://facebook.com"
			target="_blank">
			{children}
		</a>		
	)
}