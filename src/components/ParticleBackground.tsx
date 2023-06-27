import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticleBackground = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
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
						value: "#146C94",
					},
				},
				fpsLimit: 60,
				particles: {
					color: {
						value: "#AFD3E2",
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
