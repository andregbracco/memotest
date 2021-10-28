import sumar from './Functions';

test('suma 2+2', ()=> {

    const suma = sumar(2, 2);

    expect(suma).toBe(4);

})

test('suma 2+3', ()=> {

    const suma = sumar(2, 3);

    expect(suma).toBe(5);

})