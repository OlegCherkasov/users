import http from './http'

export async function getUsers() {
  try {
    const response = await http.get('users');
    return response.data.data.map((user: { id: number; first_name: string; last_name: string; email: string; avatar: string; }) => {
      return {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        avatar: user.avatar,
      }
    })
  } catch (error) {
    console.error(error);
  }
}
