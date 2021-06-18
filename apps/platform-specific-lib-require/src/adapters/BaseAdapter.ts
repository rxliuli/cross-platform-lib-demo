export interface BaseAdapter {
  get<T>(url: string): Promise<T>
}
