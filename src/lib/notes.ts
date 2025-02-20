import { supabase } from './supabase'
import type { CreateNoteInput, Note, UpdateNoteInput } from '@/types'

export async function getNotes() {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .order('is_pinned', { ascending: false })
    .order('updated_at', { ascending: false })

  if (error) throw error
  return data as Note[]
}

export async function createNote(note: CreateNoteInput) {
  const { data, error } = await supabase
    .from('notes')
    .insert(note)
    .select()
    .single()

  if (error) throw error
  return data as Note
}

export async function updateNote({ id, ...note }: UpdateNoteInput) {
  const { data, error } = await supabase
    .from('notes')
    .update(note)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as Note
}

export async function deleteNote(id: string) {
  const { error } = await supabase
    .from('notes')
    .delete()
    .eq('id', id)

  if (error) throw error
}

export async function getUpcomingReminders() {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .not('reminder_at', 'is', null)
    .gte('reminder_at', new Date().toISOString())
    .order('reminder_at', { ascending: true })

  if (error) throw error
  return data as Note[]
}