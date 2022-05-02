import { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie-player';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import animation from '../../../assets/lottie/anilottie.json';
import Nav from '../../components/Nav';
import WelcomeText from '../../components/WelcomeText';

import './styles.css';

const Home = () => {
	const [showText, setShowText] = useState(true);
	const [playLottie, setPlayLottie] = useState(false);
	const lotiRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.lottie_container',
			pin: '.lottie_container',
			start: 'top top',
			end: '150% 100%',
			scrub: true,
			markers: true,
			// onEnter: function () {
			// 	setPlayLottie(true);
			// },
			onUpdate: function () {
				//si el timeline esta en el 50% de la animacion

				if (tl.progress() >= 0.4) {
					setShowText(false);
					//seteo el estado de la animacion a true
					// setIsAnimation(true);
				}
			},
		},
	});

	tl.to('.lottie', { scale: 4, duration: 10 });
	tl.to('.text_container', { opacity: 1 }, '-=8');
	return (
		<>
			<div className="main_container">
				<div className="lottie_container">
					<Nav />
					<Lottie
						ref={lotiRef}
						animationData={animation}
						speed={0.5}
						style={{ width: 300, height: 300 }}
						play={true}
						rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
						className="lottie"
					/>
					<div className="text_container">
						<WelcomeText showText={showText} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
