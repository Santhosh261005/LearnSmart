const API_BASE_URL = "http://localhost:5000";

export async function getStudentProfile() {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${API_BASE_URL}/student/getStudentProfile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, 
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch student profile");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching student profile:", error);
    throw error;
  }
}


export async function updateStudentProfile(profileData) {
  try {
    console.log(profileData);
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/student/updateStudentProfile`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,

      },
      body: JSON.stringify(profileData)
    });
    if (!response.ok) {
      throw new Error('Failed to update student profile');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error updating student profile:', error);
    throw error;
  }
}
