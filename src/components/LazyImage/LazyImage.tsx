import React, { ReactElement, useState, useEffect, useRef } from 'react'

interface Props {
    src: string,
    alt: string
}

const placeHolder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='

const LazyImage = ({src, alt}: Props): ReactElement => {
    const [imageSrc, setImageSrc] = useState<string>(placeHolder);
    // const [imageRef, setImageRef] = useState<HTMLImageElement>();
    const ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        let observer: any;
        let didCancel = false;

        if (ref.current && imageSrc === placeHolder) {
            if (IntersectionObserver) {
                observer = new IntersectionObserver(
                    entries => {
                    entries.forEach(entry => {
                        // when image is visible in the viewport + rootMargin
                        if (
                        !didCancel &&
                        (entry.intersectionRatio > 0 || entry.isIntersecting)
                        ) {
                        setImageSrc(src)
                        }
                    })
                    },
                    {
                    threshold: 0.01,
                    rootMargin: '75%',
                    }
                )
                observer.observe(ref.current)
            } else {
                // Old browsers fallback
                setImageSrc(src)
            }
        }
        return () => {
            didCancel = true
            // on component unmount, we remove the listner
            if (observer && observer.unobserve) {
              observer.unobserve(ref.current)
            }
        }
    })
    return <img ref={ref} src={imageSrc} alt={alt} />;
}

export default LazyImage
