export interface BaseAdapter<T> {
  upload(data: T): Promise<string>
}
