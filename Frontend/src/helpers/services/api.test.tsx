import { loginAPI, getProfileAPI, editUserNameAPI } from "./api";
import fetchMock from "jest-fetch-mock";

/**
 * loginAPI
 */
describe("loginAPI function", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    console.log = jest.fn();
  });

  it("should call loginAPI with correct parameters", async () => {
    const mockResponse = true;

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await loginAPI("test@example.com", "password123");
    if (!result?.status) {
      expect(result).toEqual(mockResponse);
    } else {
      expect(result.message).toEqual("Error: User not found!");
      expect(result.status).toBe(400);
    }
  });

  it("should handle errors in loginAPI", async () => {
    fetchMock.mockRejectOnce(new Error("API Error"));
    console.log = jest.fn();
    const response = await loginAPI("test@example.com", "password123");
    if (!response?.status) {
      expect(response).toBe(!status);
      expect(console.log).toHaveBeenCalledWith(
        expect.any(Error),
        "error in the backend"
      );
    } else {
      expect(response.message).toEqual("Error: User not found!");
      expect(response.status).toBe(400);
    }
  });
});
/**
 * getProfileAPI
 */
describe("getProfileAPI function", () => {
  beforeEach(() => {
    loginAPI("test@example.com", "password123");
    fetchMock.resetMocks();
    console.log = jest.fn();
  });

  it("should call getProfileAPI with correct parameters", async () => {
    const mockResponse = { profile: { name: "John" } };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const response = await getProfileAPI("tokensssm");
    if (!response?.status) {
      expect(response).toBe(undefined);
    } else {
      expect(response.message).toBe("jwt malformed");
      expect(response.status).toBe(401);
    }
  });

  it("should handle errors in getProfileAPI", async () => {
    fetchMock.mockRejectOnce(new Error("API Error"));
    console.log = jest.fn();

    const response = await getProfileAPI("tokensssm");
    if (!response?.status) {
      expect(response).toBeUndefined();
      expect(console.log).toHaveBeenCalledWith(
        expect.any(Error),
        "error in getProfileAPI"
      );
    } else {
      expect(response.message).toBe("jwt malformed");
      expect(response.status).toBe(401);
    }
  });
});
/**
 * editUserNameAPI
 */
describe("editUserNameAPI function", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    console.log = jest.fn();
  });

  it("should call editUserNameAPI with correct parameters", async () => {
    const mockResponse = { success: true };
    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const response = await editUserNameAPI("tokensssm", "John", "Doe");
    if (!response?.status) {
      expect(response).toEqual(undefined);
    } else {
      expect(response.message).toBe("jwt malformed");
      expect(response.status).toBe(401);
    }
  });

  it("should handle errors in editUserNameAPI", async () => {
    fetchMock.mockRejectOnce(new Error("API Error"));

    const response = await editUserNameAPI("tokensssm", "John", "Doe");
    if (!response?.status) {
      expect(response).toBe(undefined);
      expect(console.log).toHaveBeenCalledWith(
        expect.any(Error),
        "error in editUserNameAPI"
      );
    } else {
      expect(response.message).toBe("jwt malformed");
      expect(response.status).toBe(401);
    }
  });
});
