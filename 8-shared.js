export const address='Flat no 51, R R Township, HAL Colony, Old Bowenpally, Hyderabad 500011';
export const map='https://maps.app.goo.gl/BCwPVpgGX25PETQw7';
export function Facts({items}){return <dl>{items.map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}
