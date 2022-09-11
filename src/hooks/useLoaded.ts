import { useEffect, useState } from "react";

export const useLoaded = () => {
	const [loaded, setLoaded] = useState<boolean>(false);

	useEffect(() => setLoaded(true), []);

	return loaded;
};
