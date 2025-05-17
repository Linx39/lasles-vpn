const DURATION = 2000;

const countersWrappers = document.querySelectorAll('.js-counters-wrapper');

if (countersWrappers) {
  countersWrappers.forEach(wrapper => {
    const counters = wrapper.querySelectorAll('.js-counter');

    const isInViewport = (element) => {
      const distance = element.offsetTop + element.offsetHeight / 2;

      return (
        distance <= window.pageYOffset + window.innerHeight &&
        distance >= window.pageYOffset
      );
    };

    const activateCounters = () => {
      if(isInViewport(wrapper)) {
        window.removeEventListener('scroll', activateCounters);

        counters.forEach(counter => {
          let start = +counter.innerHTML;
          const end = +counter.dataset.max;

          const interval = setInterval(() => {
            counter.innerHTML = ++start;
            if(start === end) {
              clearInterval(interval);
            }
          }, DURATION / end );
        })
      }
    };

    window.addEventListener('DOMContentLoaded', activateCounters);
    window.addEventListener('scroll', activateCounters);
  });
};
