export default function Content({text, banner}){
	return (

			<div className="Content">
				<div className="page-content">
					<img src={banner} alt="Page Banner" />
				</div>

				<h1>{text}</h1>
			</div>

		)
}