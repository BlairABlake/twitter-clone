const months = [ "Jan", "Feb", "Mar", "Apr", "May", "June",
"July", "Aug", "Sep", "Oct", "Nov", "Dec" ];

export function diffString(datetime: Date, nowDate?: Date): string {
  const now = nowDate ?? new Date(Date.now())
  const sec_diff = Math.abs(datetime.getSeconds() - now.getSeconds())
  const min_diff = datetime.getMinutes() - now.getMinutes()
  const hour_diff = datetime.getHours() - now.getHours()
  const date_diff = datetime.getDate() - now.getDate()
  const month_diff = datetime.getMonth() - now.getMonth()
  const year_diff = datetime.getFullYear() - now.getFullYear()

  if (year_diff != 0) return `${months[datetime.getMonth()]} ${datetime.getDate()}, ${datetime.getFullYear()}`
  else if(month_diff != 0 || date_diff != 0) return `${months[datetime.getMonth()]} ${datetime.getDate()}`
  else if(hour_diff != 0) return `${hour_diff}h`
  else if(min_diff != 0) return `${min_diff}m`
  else return `${sec_diff}s`
}
