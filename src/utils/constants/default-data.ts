import { FieldValues } from 'hooks'

export const DEFAULT_DATA: FieldValues = {
  name: 'Charmina Vadlapatla',
  profession: 'Software Developer',
  summary:
    'Resourceful Developer with 11 years of experience in designing and developing user interfaces, testing and training employees. Skilled at utilizing a wide variety of tools and programs to provide effective applications.',
  email: 'Charminav262000@gmail.com',
  phone: '+1 234 567 890',
  skills: [
    {
      skill: 'JavaScript'
    },
    {
      skill: 'Python'
    },
    {
      skill: 'Web Services'
    },
    {
      skill: 'C++'
    },
    {
      skill: 'HTML5'
    },
    {
      skill: 'CSS'
    },
    {
      skill: 'SQL'
    },
    {
      skill: 'User Interface'
    }
  ],
  languages: [
    {
      language: 'English',
      level: 'advanced'
    },
    {
      language: 'Spanish',
      level: 'intermediate'
    },
    {
      language: 'Hindi',
      level: 'advanced'
    }
  ],
  education: [
    {
      institution: 'Lamar University',
      program: "Masters's Degree: Computer Science",
      duration: '2022 - 2024'
    }
  ],
  experience: [
    {
      role: 'Developer',
      employer: 'IBM',
      duration: 'April 2018 - Present',
      description:
        "I implemented the game mechanics in the Unity 3D graphics engine; <br /> I programmed the artificial intelligence of the game's enemies; <br /> Import different types of files such as audio, textures and 3D objects into the game. <br /> I collaborated with designers and artists."
    },

    {
      role: 'Developer',
      employer: 'IBM',
      duration: 'April 2018 - Present',
      description:
        "I implemented the game mechanics in the Unity 3D graphics engine; <br /> I programmed the artificial intelligence of the game's enemies; <br /> Import different types of files such as audio, textures and 3D objects into the game. <br /> I collaborated with designers and artists."
    }
  ],
  links: [
    {
      service: 'linkedin',
      username: 'gabrielcastilhov'
    }
  ]
}

export const DEFAULT_DATA_EMPTY: FieldValues = {
  name: '',
  phone: '',
  email: '',
  profession: '',
  summary: '',
  experience: [
    {
      employer: '',
      role: '',
      duration: '',
      description: ''
    }
  ],
  education: [
    {
      institution: '',
      program: '',
      duration: ''
    }
  ],
  links: [
    {
      service: '',
      username: ''
    }
  ],
  skills: [
    {
      skill: ''
    }
  ],
  languages: [
    {
      language: ''
    }
  ]
}
