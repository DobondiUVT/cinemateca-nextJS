export default function getReviews() {
    let reviews = [
        {
            id: 1,
            user: {
                id: 1,
                username: "John Doe",
                avatar: "https://i.pravatar.cc/150?img=1",
            },
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc ut nunc. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc ut nunc.",
            created_at: "2021-01-01",
            rating: "42"
        },
        {
            id: 2,
            user: {
                id: 2,
                username: "Jane Doe",
                avatar: "https://i.pravatar.cc/150?img=2",
            },
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc ut nunc. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc ut nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc ut nunc. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc ut nunc.",
            created_at: "2021-01-01",
            rating: "77"
        },
        {
            id: 3,
            user: {
                id: 3,
                username: "Jany Dos",
                avatar: "https://i.pravatar.cc/150?img=3",
            },
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc ut nunc. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc ut nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc ut nunc. Sed euismod, nisl vitae ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nisl nunc ut nunc.",
            created_at: "2021-01-01",
            rating: "94"
        },
    ]
    reviews = [...reviews, ...reviews, ...reviews, ...reviews, ...reviews]
    return reviews
}
