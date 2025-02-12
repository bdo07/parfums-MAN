/**
 * The useInterval hook takes in two parameters as arguments, first it takes a `callback` function
 * and second is the `initialDelay`.
 * It runs the callback function after every fixed interval of time.
 *
 * ```js
 * function Timer() {
 *   const { start, stop } = useInterval(() => {
 *     console.log('Runs every one second!')
 *   }, 1000)
 *
 *   return <div>useInterval</div>;
 * }
 * ```
 * @param {() => void} callback
 * The callback function does not take any input as argument and returns `void` on execution.
 * @param {number} initialDelay
 * It sets the time period after which the callback gets called.
 *
 *
 * @returns {{start: (delay?: number) => void, stop: () => void}}
 */
export declare function useInterval(callback: () => any, initialDelay: number): {
    start: (delay: number) => void;
    stop: () => void;
};
