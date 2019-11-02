import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'add',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../register/register.module' ).then(m => m.RegisterPageModule)
          }
        ]
      },
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../feed/feed.module').then(m => m.FeedPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/add',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/add',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
