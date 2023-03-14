export const userAgentMobile = (): boolean => {
  if (navigator?.userAgent) {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator?.userAgent
    )
      ? true
      : false;
  }

  return false;
};
