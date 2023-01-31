import { parseISO, format , Locale} from 'date-fns'
import { es } from 'date-fns/locale'

type Props = {
  dateString: string
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  const rawDateStr = format(date, 'LLLL	d, yyyy', {locale: es})
  const capitalized = rawDateStr.charAt(0).toUpperCase() + rawDateStr.slice(1)
  return <time dateTime={dateString}>{capitalized}</time>
}

export default DateFormatter
