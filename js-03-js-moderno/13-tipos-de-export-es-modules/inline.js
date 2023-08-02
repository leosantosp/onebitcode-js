// Inline -> na mesma linha que declaro a função, eu já exporto ela
export function inline(){
    console.log('Export nomeado inline');
}

// export default -> é padrão e pode ser uma função anônima
export default function (){
    console.log('Export default inline');
}