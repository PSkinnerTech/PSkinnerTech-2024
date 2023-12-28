const Icons: {
  [key: string]: JSX.Element;
} = {
  youtube: (
    <svg
      width="28"
      height="25"
      viewBox="0 0 28 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="fa6-brands:youtube">
        <path
          id="Vector"
          d="M26.7194 6.05874C26.414 4.90396 25.5144 3.99448 24.3722 3.68584C22.3019 3.125 14 3.125 14 3.125C14 3.125 5.69821 3.125 3.62781 3.68584C2.4856 3.99453 1.586 4.90396 1.28067 6.05874C0.725922 8.15186 0.725922 12.5189 0.725922 12.5189C0.725922 12.5189 0.725922 16.886 1.28067 18.9792C1.586 20.1339 2.4856 21.0055 3.62781 21.3142C5.69821 21.875 14 21.875 14 21.875C14 21.875 22.3018 21.875 24.3722 21.3142C25.5144 21.0055 26.414 20.1339 26.7194 18.9792C27.2741 16.886 27.2741 12.5189 27.2741 12.5189C27.2741 12.5189 27.2741 8.15186 26.7194 6.05874ZM11.2848 16.4839V8.55395L18.2235 12.519L11.2848 16.4839Z"
          fill="white"
        />
      </g>
    </svg>
  ),
  hashnode: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="26"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M35.19 171.1c-46.91 46-46.91 122.9 0 169.8L171.1 476.8c46 46.9 122.9 46.9 169.8 0l135.9-135.9c46.9-46.9 46.9-123.8 0-169.8L340.9 35.19c-46.9-46.91-123.8-46.91-169.8 0zM315.5 315.5c-32.9 32.8-86.1 32.8-118.9 0c-32.9-32.9-32.9-86.1 0-118.9c32.8-32.9 86-32.9 118.9 0c32.8 32.8 32.8 86 0 118.9"
      />
    </svg>
  ),
  twitter: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 448 512"
    >
      <path
        fill="currentColor"
        d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"
      />
    </svg>
  ),
  github: (
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="fa6-brands:github">
        <path
          id="Vector"
          d="M8.36417 20.1805C8.36417 20.282 8.24831 20.3633 8.10222 20.3633C7.93598 20.3785 7.82012 20.2973 7.82012 20.1805C7.82012 20.0789 7.93598 19.9977 8.08207 19.9977C8.23319 19.9824 8.36417 20.0637 8.36417 20.1805ZM6.7975 19.952C6.76223 20.0535 6.86298 20.1703 7.01411 20.2008C7.14509 20.2516 7.29621 20.2008 7.32644 20.0992C7.35666 19.9977 7.26095 19.8809 7.10982 19.8352C6.97885 19.7996 6.83276 19.8504 6.7975 19.952ZM9.02409 19.8656C8.878 19.9012 8.77725 19.9977 8.79236 20.1145C8.80747 20.216 8.93845 20.282 9.08958 20.2465C9.23566 20.2109 9.33641 20.1145 9.3213 20.0129C9.30619 19.9164 9.17018 19.8504 9.02409 19.8656ZM12.3388 0.40625C5.35172 0.40625 0.00689697 5.75352 0.00689697 12.7969C0.00689697 18.4285 3.5231 23.2477 8.54552 24.9438C9.19033 25.0605 9.41702 24.6594 9.41702 24.3293C9.41702 24.0145 9.4019 22.2777 9.4019 21.2113C9.4019 21.2113 5.87563 21.973 5.13511 19.698C5.13511 19.698 4.56083 18.2203 3.73467 17.8395C3.73467 17.8395 2.58108 17.0422 3.81527 17.0574C3.81527 17.0574 5.06962 17.159 5.75976 18.3676C6.86298 20.3277 8.71176 19.7641 9.43213 19.4289C9.54799 18.6164 9.87543 18.0527 10.2381 17.7176C7.42215 17.4027 4.58098 16.9914 4.58098 12.1062C4.58098 10.7098 4.96383 10.009 5.76984 9.11523C5.63886 8.78516 5.21067 7.42422 5.90082 5.66719C6.95366 5.33711 9.37672 7.03828 9.37672 7.03828C10.3842 6.75391 11.4673 6.60664 12.5403 6.60664C13.6133 6.60664 14.6964 6.75391 15.7039 7.03828C15.7039 7.03828 18.1269 5.33203 19.1798 5.66719C19.8699 7.4293 19.4417 8.78516 19.3107 9.11523C20.1167 10.0141 20.6104 10.7148 20.6104 12.1062C20.6104 17.0066 17.6433 17.3977 14.8273 17.7176C15.2908 18.1187 15.6837 18.8805 15.6837 20.0738C15.6837 21.7852 15.6686 23.9027 15.6686 24.3191C15.6686 24.6492 15.9003 25.0504 16.5401 24.9336C21.5776 23.2477 24.9931 18.4285 24.9931 12.7969C24.9931 5.75352 19.3259 0.40625 12.3388 0.40625ZM4.90338 17.9207C4.83789 17.9715 4.85301 18.0883 4.93865 18.1848C5.01925 18.266 5.13511 18.3016 5.2006 18.2355C5.26609 18.1848 5.25097 18.068 5.16533 17.9715C5.08473 17.8902 4.96887 17.8547 4.90338 17.9207ZM4.35933 17.5094C4.32407 17.5754 4.37444 17.6566 4.47519 17.7074C4.55579 17.7582 4.65654 17.743 4.69181 17.6719C4.72707 17.6059 4.67669 17.5246 4.57594 17.4738C4.47519 17.4434 4.39459 17.4586 4.35933 17.5094ZM5.99149 19.3172C5.91089 19.3832 5.94112 19.5355 6.05698 19.632C6.17284 19.7488 6.31893 19.7641 6.38442 19.6828C6.44991 19.6168 6.41968 19.4645 6.31893 19.368C6.2081 19.2512 6.05698 19.2359 5.99149 19.3172ZM5.41721 18.5707C5.33661 18.6215 5.33661 18.7535 5.41721 18.8703C5.49781 18.9871 5.63383 19.0379 5.69931 18.9871C5.77991 18.9211 5.77991 18.7891 5.69931 18.6723C5.62879 18.5555 5.49781 18.5047 5.41721 18.5707Z"
          fill="white"
        />
      </g>
    </svg>
  ),
};

const Icon = ({ type, color = "#fff" }: { type: string; color?: string }) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`w-10 h-10 flex items-center justify-center rounded-lg shadow-grid shrink-0`}
    >
      {Icons[type]}
    </div>
  );
};

export default Icon;