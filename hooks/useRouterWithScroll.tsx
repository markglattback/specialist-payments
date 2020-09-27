import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {
  behavior?: "smooth" | "auto" | undefined;
  left?: number;
  top?: number;
};

function useRouterWithScroll({
  behavior = "smooth",
  left = 0,
  top = 0,
}: Props) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChangeComplete = () => {
      window.scrollTo({ top, left, behavior });
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    // If the component is unmounted, unsubscribe from the event
    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [behavior, left, top]);
}

export default useRouterWithScroll;
