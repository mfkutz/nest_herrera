import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { name } from './bases/01-types.ts'
import { bulbasaur, pokemonIds } from './bases/02-objects.ts'
// import { charmander } from './bases/03-classes.ts'
// import { charmander } from './bases/04-injection.ts'
// import { charmander } from './bases/05-decorators.ts'
import { charmander } from './bases/06-decorators2.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript + ${name} </h1>
    <h2>${pokemonIds.join(', ')}</h2>
    <h2>${bulbasaur.name}</h2>
    <h2>${charmander.name}</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
