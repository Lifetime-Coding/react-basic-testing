export function taxDeducation(salary) {
    const tax = 10 / 100;
    const netSalary = salary - salary * tax;
    return `Gaji bersih anda Rp${netSalary}`;
}

export function call(name) {
    return `Hello ${name}`
}