import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BalancePage } from './balance.page';

const routes: Routes = [
  {
    path: '',
    component: BalancePage,
    children: [
      {
        path: 'view-txn',
        loadChildren: () => import('./view-tokens/view-tokens.module').then(m => m.ViewTokensPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BalancePage]
})
export class BalancePageModule {}
