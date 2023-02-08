import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaComponent } from './pages/lista/lista.component';

const routes: Routes = [

  {path: '', component: HomeComponent, pathMatch:'full' },

  {path: 'cadastro', component:CadastroComponent },

  {path: 'lista', component:ListaComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
