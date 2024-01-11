import { useEffect, useState } from 'react';

export default function useScrollAnimation(id: string) {
    const [animate, setAnimate] = useState(false);
    const [animationCompleted, setAnimationCompleted] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const targetElement = document.getElementById(id);

            if (targetElement) {
                const targetOffsetTop = targetElement.offsetTop;
                const targetHeight = targetElement.clientHeight;
                const scrollPosition = window.scrollY;

                if (
                    scrollPosition >= targetOffsetTop + targetHeight / 3 &&
                    !animationCompleted
                ) {
                    setAnimate(true);
                    setAnimationCompleted(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [animationCompleted, id]);
    return { animate, setAnimate };
}
