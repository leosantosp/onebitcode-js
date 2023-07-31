export const nome = "Leonardo";

// export: Posso usá-la antes de uma função ou variável, ele irá exportar este valor. Posso ter varios exports
export function label(attributes){
    const element = document.createElement('label');
    Object.assign(element.attributes);
    return element;
}

export function input(attributes){
    const element = document.createElement('input');
    Object.assign(element, attributes);
    return element;
}

export function br(){
    const element = document.createElement('br');
    return element;
}
