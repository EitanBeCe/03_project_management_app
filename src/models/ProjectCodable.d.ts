export interface ProjectCodable {
  title: string
  description: string
  dueDate: string
  tasks?: TaskCodable[]
}

export interface TaskCodable {
  text: string
}
