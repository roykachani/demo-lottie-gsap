import { useEffect, useRef, useState, useMemo } from 'react';
import Lottie from 'react-lottie-player';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// import animation from '../../../assets/lottie/anilottie.json';
// import aniPrueba1 from '../../../assets/lottie/prueba1.json';
// import aniPrueba2 from '../../../assets/lottie/prueba2.json';
// import aniPrueba3 from '../../../assets/lottie/prueba3.json';
// import test1 from '../../../assets/lottie/test1.json';
import testfinal from '../../../assets/lottie/testfinal1.json';
import Nav from '../../components/Nav';
import WelcomeText from '../../components/WelcomeText';

import './styles.css';

const Home = () => {
	const [showText, setShowText] = useState(true);
	const [playLottie, setPlayLottie] = useState(false);
	gsap.registerPlugin(ScrollTrigger);
	const tl = useRef();

	const addAnim = () => {
		tl.current = gsap
			.timeline({
				scrollTrigger: {
					trigger: '.lottie_container',
					pin: true,
					start: 'top top',
					end: '150% 45%',
					scrub: true,
					markers: true,
					// onEnter: function () {
					// 	setPlayLottie(true);
					// },
					onUpdate: function () {
						//si el timeline esta en el 50% de la animacion
						if (tl.current.progress() >= 0.4) {
							setShowText(false);
							//seteo el estado de la animacion a true
							// setIsAnimation(true);
						}
					},
				},
			})
			.to('.lottie', { scale: 5, y: 100, duration: 10 })
			.to('.text_container', { opacity: 1 }, '-=8');
		ScrollTrigger.refresh();
	};

	const removeAnim = () => {
		tl.current.kill();
	};

	useEffect(() => {
		addAnim();
		console.log('animation added');
		return () => {
			removeAnim();
			console.log('removido');
		};
	}, []);

	return (
		<>
			<div className="main_container">
				<div className="lottie_container">
					<Nav />
					<Lottie
						animationData={testfinal}
						speed={1}
						style={{ width: 500, height: 500 }}
						play={true}
						rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
						className="lottie"
					/>
					<div className="text_container">
						<WelcomeText showText={showText} />
					</div>
					<div className="text_scroll">
						<p>scroll down to start playing</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
