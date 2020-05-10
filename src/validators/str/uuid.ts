const uuidRegEx = /a/

const uuid1re = /^[0-9A-F]{8}-[0-9A-F]{4}-[1][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
const uuid2re = /^[0-9A-F]{8}-[0-9A-F]{4}-[2][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
const uuid3re = /^[0-9A-F]{8}-[0-9A-F]{4}-[3][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
const uuid4re = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
const uuid5re = /^[0-9A-F]{8}-[0-9A-F]{4}-[5][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

export function uuid(version: 'v1' | 'v2' | 'v3' | 'v4' | 'v5') {
  switch (version) {
    case 'v1':
      return (value: string) => uuid1re.test(value)
    case 'v2':
      return (value: string) => uuid2re.test(value)
    case 'v3':
      return (value: string) => uuid3re.test(value)
    case 'v4':
      return (value: string) => uuid4re.test(value)
    case 'v5':
      return (value: string) => uuid5re.test(value)
  }
}

export const isUuid = uuid
