
        var reason = ["They prevent soil Erosion.",
            "They improve soil Quality.",
            "Trees are home for Wildlife and birds.",
            "Trees provide us Food."
        ];

        var images = ["https://images.unsplash.com/photo-1621395821864-fd92dd6e2cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMTU5MTI5OQ&ixlib=rb-1.2.1&q=80&w=400",
            "https://images.unsplash.com/photo-1621370568028-1dd48b8b91dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMTU5MTI5OQ&ixlib=rb-1.2.1&q=80&w=400",
            "https://images.unsplash.com/photo-1621328405662-7cf39e5c4f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMTU5MTI5OQ&ixlib=rb-1.2.1&q=80&w=400",
            "https://images.unsplash.com/photo-1621417696521-fac02d21ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMTU5MTM3NQ&ixlib=rb-1.2.1&q=80&w=400"
        ];

        var i = 0;

        function nextslide() {
            document.getElementById("reasontext").innerHTML = reason[i];
            document.getElementById("album").src = images[i];
            i++;
        }

    