export enum Entities {
  WORKSPACE = "WORKSPACE",
  SCREENS = "SCREENS",
  CONTENT = "CONTENT",
  BILLING = "BILLING",
}

export const COMPANY_DATA = {
  company: {
    _id: "6481e3d598b3bdea4b7ab0f0",
    name: "COMPANY 1",
    country: "US",
    ownerId: "c-1",
    industry: "PLACES_WORKSHIP",
    createdAt: "2023-06-08T14:21:09.148Z",
    updatedAt: "2023-06-08T14:21:09.148Z",
  },
};

export const WORKSPACE_DATA = {
  workspace: {
    _id: "w-1",
    name: "Company WS ",
    isDefault: true,
    language: "en",
    timezone: "UTC",
    ownerId: "o-1",
    companyId: "c-1",
    members: [
      {
        id: "m-1",
        permissions: [
          {
            entity: "WORKSPACE",
            role: "READ",
            _id: "p-1",
          },
          {
            entity: "SCREENS",
            role: "READ",
            _id: "p-2",
          },
          {
            entity: "CONTENT",
            role: "READ",
            _id: "p-3",
          },
          {
            entity: "BILLING",
            role: "READ",
            _id: "p-4",
          },
        ],
        _id: "m-1",
      },
      {
        id: "m-2",
        permissions: [
          {
            entity: "WORKSPACE",
            role: "ADMIN",
            _id: "p-5",
          },
          {
            entity: "SCREENS",
            role: "ADMIN",
            _id: "p-6",
          },
          {
            entity: "CONTENT",
            role: "ADMIN",
            _id: "p-7",
          },
        ],
        _id: "m-2",
      },
    ],
    createdAt: "2023-06-08T14:21:09.187Z",
    updatedAt: "2023-10-28T11:51:43.519Z",
    _owner: {
      _id: "o-1",
      name: "test o",
      email: "testo@test.com",
    },
    _members: [
      {
        _id: "m-1",
        name: "Test 3",
        email: "test3@test.com",
        permissions: [
          {
            entity: "WORKSPACE",
            role: "READ",
            _id: "p-8",
          },
          {
            entity: "SCREENS",
            role: "READ",
            _id: "p-9",
          },
          {
            entity: "CONTENT",
            role: "READ",
            _id: "p-10",
          },
          {
            entity: "BILLING",
            role: "READ",
            _id: "p-11",
          },
        ],
      },
      {
        _id: "6481dba02a2fbebdfd7377c4",
        name: "Test 2",
        email: "test2@test.com",
        permissions: [
          {
            entity: "WORKSPACE",
            role: "ADMIN",
            _id: "p-12",
          },
          {
            entity: "SCREENS",
            role: "ADMIN",
            _id: "p-13",
          },
          {
            entity: "CONTENT",
            role: "ADMIN",
            _id: "p-14",
          },
        ],
      },
    ],
    invitations: [
      {
        _id: "i-1",
        userEmail: "testi1@test.com",
        workspaceId: "w-1",
        permissions: [
          {
            entity: "WORKSPACE",
            role: "ADMIN",
            _id: "p-15",
          },
          {
            entity: "SCREENS",
            role: "ADMIN",
            _id: "p-16",
          },
          {
            entity: "CONTENT",
            role: "ADMIN",
            _id: "p-17",
          },
          {
            entity: "BILLING",
            role: "ADMIN",
            _id: "p-18",
          },
        ],
        token: "t-1",
        expireAt: "2023-06-26T16:15:55.952Z",
        createdAt: "2023-06-26T16:15:55.962Z",
        updatedAt: "2023-06-26T16:15:55.962Z",
      },
    ],
    _companyOwner: {
      id: "m-1",
      name: "test",
      email: "test@test.com",
    },
  },
};
