import { useEffect } from 'react';
import Lottie from 'react-lottie-player';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import animation from '../../../assets/lottie/anilottie.json';

// import styles from './styles.module.css';
import './styles.css';

const Home = () => {
	gsap.registerPlugin(ScrollTrigger);

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.lottie_container',
			pin: '.lottie_container',
			start: 'top top',
			end: '100% 50%',
			scrub: true,
			markers: true,
			onUpdate: function () {
				console.log(tl.progress());
				//si el timeline esta en el 50% de la animacion
				if (tl.progress() > 0.5) {
					console.log('50%');
					//seteo el estado de la animacion a true
					// setIsAnimation(true);
				}
			},
		},
	});

	tl.to('.lottie', { duration: 10, scale: 4 });
	tl.to('.text_container', { opacity: 1 }, '-=5');

	return (
		<>
			<div className="main_container">
				<div className="lottie_container">
					<Lottie
						animationData={animation}
						style={{ width: 300, height: 300 }}
						play={true}
						rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
						className="lottie"
					/>
					<div className="text_container">
						<p className="text">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum.
						</p>
					</div>
				</div>
				{/* <div className="cuadrado cuadrado_1"></div>
				<div className="cuadrado cuadrado_2"></div>
				<div className="cuadrado cuadrado_3"></div> */}
			</div>
		</>
	);
};

export default Home;
