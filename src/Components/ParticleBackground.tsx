import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticleBackground = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);

		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			await console.log(container);
		},
		[]
	);
	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: "-1",
			}}
			options={{
				fullScreen: {
					enable: false,
				},
				background: {
					color: {
						value: "#150026",
					},
				},
				fpsLimit: 60,
				particles: {
					color: {
						value: "#5D3F6A",
					},
					collisions: {
						enable: false,
					},
					move: {
						direction: "none",
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 0.2,
						straight: true,
					},
					number: {
						density: {
							enable: true,
							area: 900,
						},
						value: 10,
					},
					opacity: {
						value: 0.8,
						random: true,
					},
					size: {
						value: { min: 50, max: 150 },
					},
				},
			}}
		/>
	);
};
