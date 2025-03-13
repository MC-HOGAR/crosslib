import { z } from 'zod'
import { getToday } from './../../../common/utils/DateUtils'

const today = getToday()

export const ArticuloPrecioZodSchema = z.object({
    arp_utilidad_web: z.number().min(0, 'Utilidad Web: debe ser mayor o igual a 0').max(200, 'Utilidad Web: debe ser menor o igual a 200'),
    arp_utilidad_ofer: z.number().min(0, 'Utilidad Oferta: debe ser mayor o igual a 0').max(200, 'Utilidad Oferta: debe ser menor o igual a 200').nullish(),
    arp_utilidad_ofer_fecha_hasta: z.date().refine(date => date >= today, { message: 'Utilidad Oferta Fecha Hasta: la fecha debe ser igual o mayor a hoy' }).nullish(),
    arp_utilidad_ofer_stock_hasta: z.number().min(0, 'Utilidad Oferta Stock Hasta: debe ser mayor o igual a 0').nullish(),
    arp_descuento: z.number().min(0, 'Descuento: debe ser mayor o igual a 0').max(200, 'Descuento: debe ser menor o igual a 200').nullish(),
    arp_descuento_fecha_hasta: z.date().refine(date => date >= today, { message: 'Descuento Fecha Hasta: la fecha debe ser igual o mayor a hoy' }).nullish(),
})