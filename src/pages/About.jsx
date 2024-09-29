import Content from "../components/Content.jsx"



export default function About(){
	return (
			<div className="About">
				<Content 
				text="ABOUT ME"
				banner="https://i.pinimg.com/originals/be/e2/16/bee216fe545375389f0e842d1a8310db.gif"
				/>

				<div className="description">
					<div className="me">
						<img src="https://avatars.githubusercontent.com/u/113816853?v=4" alt="Me" />
						<h2>Barry Adam</h2>
					</div>

					<hr/>

					<p>
						
						Hello There, I am Abdul Barry A. Adam
						from Dalubhasaan ng Lungsod ng Lucena
						from class 3B, This repository is done
						in compliance to WS101 course by Sir Rovie Balingbing
					</p>

				</div>	

			</div>
		)
}