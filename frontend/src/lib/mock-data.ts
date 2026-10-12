import { format, subDays } from 'date-fns'

export type MetricCard = {
  title: string
  value: number | string
  tone?: 'ok' | 'warning' | 'danger' | 'info'
}

export function getDashboardMetrics() {
  return [
    { title: 'Patients', value: 148, tone: 'info' },
    { title: 'Active sessions', value: 29, tone: 'ok' },
    { title: 'Devices online', value: 17, tone: 'ok' },
    { title: 'Alerts today', value: 4, tone: 'warning' },
  ] satisfies MetricCard[]
}

export function getPatients() {
  return [
    { id: 1, name: 'Baby A-204', room: 'NICU 2', status: 'Stable', lastUpdated: format(subDays(new Date(), 1), 'yyyy-MM-dd') },
    { id: 2, name: 'Baby B-118', room: 'NICU 1', status: 'At risk', lastUpdated: format(subDays(new Date(), 0), 'yyyy-MM-dd') },
    { id: 3, name: 'Baby C-317', room: 'Delivery', status: 'Stable', lastUpdated: format(subDays(new Date(), 2), 'yyyy-MM-dd') },
  ]
}

export function getDevices() {
  return [
    { id: 'DEV-02', location: 'NICU 2', status: 'online', battery: 92 },
    { id: 'DEV-08', location: 'NICU 1', status: 'warning', battery: 58 },
    { id: 'DEV-09', location: 'Delivery', status: 'offline', battery: 23 },
  ]
}

export function getAlerts() {
  return [
    { id: 1, type: 'Low SpO₂', patient: 'Baby B-118', severity: 'warning', time: '2 min ago' },
    { id: 2, type: 'Temperature drift', patient: 'Baby C-317', severity: 'info', time: '11 min ago' },
    { id: 3, type: 'Sensor timeout', patient: 'Baby A-204', severity: 'danger', time: '18 min ago' },
  ]
}
