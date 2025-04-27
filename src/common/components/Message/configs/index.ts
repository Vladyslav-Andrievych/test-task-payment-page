export type MessageConfig = {
  type: 'success' | 'error';
  message: string;
};

export const messageConfig: Record<string, MessageConfig> = {
  success: {
    type: 'success',
    message: 'Operation completed successfully',
  },
  error: {
    type: 'error',
    message: 'Something went wrong',
  },
};
