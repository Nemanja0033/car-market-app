export const carYears: number[] = Array.from(
    { length: new Date().getFullYear() - 1980 + 1 },
    (_, index) => 1980 + index
);
