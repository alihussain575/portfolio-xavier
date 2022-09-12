import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useSmoothScroll = () => {
	const [isSmooth, setIsSmooth] = useState<boolean>(true);
	const router = useRouter();

	const handleStart = () => setIsSmooth(false);

	const handleStop = () => setIsSmooth(true);

	useEffect(() => {
		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleStop);
		router.events.on("routeChangeError", handleStop);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleStop);
			router.events.off("routeChangeError", handleStop);
		};
	}, [router]);

	useEffect(() => {
		document.documentElement.style.scrollBehavior = isSmooth ? "smooth" : "auto";
	}, [isSmooth]);
};

export default useSmoothScroll;
