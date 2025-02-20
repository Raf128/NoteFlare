export interface User {
  id: string
  email: string
}

export interface Note {
  id: string
  user_id: string
  title: string
  content: string
  created_at: string
  updated_at: string
  reminder_at: string | null
  is_archived: boolean
  is_pinned: boolean
  tags: string[]
}

export interface CreateNoteInput {
  title: string
  content: string
  reminder_at?: string | null
  tags?: string[]
  is_pinned?: boolean
}

export interface UpdateNoteInput extends Partial<CreateNoteInput> {
  id: string
}