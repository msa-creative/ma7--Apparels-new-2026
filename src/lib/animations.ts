import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateOnScroll = (element: string | HTMLElement, options = {}) => {
  const defaults = {
    duration: 0.8,
    opacity: 1,
    y: 0,
    stagger: 0.1,
  };
  const config = { ...defaults, ...options };

  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    ...config,
  });
};

export const liquidButtonHover = (element: HTMLElement) => {
  const tl = gsap.timeline({ paused: true });
  
  tl.to(element, {
    duration: 0.3,
    scale: 1.05,
    boxShadow: '0 20px 40px rgba(212, 175, 55, 0.3)',
  });

  element.addEventListener('mouseenter', () => tl.play());
  element.addEventListener('mouseleave', () => tl.reverse());
};

export const staggerText = (container: string | HTMLElement, staggerValue = 0.05) => {
  gsap.from(container, {
    duration: 0.6,
    opacity: 0,
    y: 20,
    stagger: staggerValue,
  });
};

export const parallaxEffect = (element: string | HTMLElement, speed = 0.5) => {
  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      onUpdate: (self) => {
        gsap.to(element, {
          y: self.getVelocity() * speed,
          duration: 0.5,
          overwrite: 'auto',
        });
      },
    },
  });
};

export const revealOnLoad = (element: string | HTMLElement, delay = 0) => {
  gsap.from(element, {
    duration: 1,
    opacity: 0,
    y: 30,
    delay,
    ease: 'power3.out',
  });
};

export const liquidImageReveal = (image: HTMLElement) => {
  gsap.from(image, {
    duration: 1,
    clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    ease: 'power3.inOut',
  });
};

export const floatingAnimation = (element: HTMLElement) => {
  gsap.to(element, {
    duration: 3,
    y: -10,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};

export const pulseAnimation = (element: HTMLElement, intensity = 0.1) => {
  gsap.to(element, {
    duration: 0.5,
    scale: 1 + intensity,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};
