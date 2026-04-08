import { ProjectType } from '@/types/content'
import { cavesOfCombat } from './projects/caves-of-combat'
import { warehouseInventory } from './projects/warehouse-inventory'
import { businessCaseForm } from './projects/business-case-form'
import { comfortAirlines } from './projects/comfort-airlines'
import { superMassive } from './projects/super-massive'
import { expenseReport } from './projects/expense-report'
import { fullStackOpen } from './projects/full-stack-open'
import { endlessBreakout } from './projects/endless-breakout'
import { fabricationDashboard } from './projects/fabrication-dashboard'
import { repIndex } from './projects/rep-index'

export const projects: ProjectType[] = [
  comfortAirlines,
  businessCaseForm,
  endlessBreakout,
  superMassive,
  cavesOfCombat,
  fullStackOpen,
  expenseReport,
  warehouseInventory,
  fabricationDashboard,
  repIndex,
]
